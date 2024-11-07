import { userProfiles } from '@/data/userProfiles';

/**
 * 计算预算匹配度
 * @param {number} userBudget - 用户预算
 * @param {number} targetBudget - 目标用户预算
 * @returns {number} 匹配度分数 (0-1)
 */
function calculateBudgetScore(userBudget, targetBudget) {
  const difference = Math.abs(userBudget - targetBudget);
  const maxBudget = Math.max(userBudget, targetBudget);
  return 1 - (difference / maxBudget);
}

/**
 * 计算日期匹配度
 * @param {string} userDate - 用户期望日期
 * @param {string[]} targetDates - 目标用户可用日期数组
 * @returns {number} 匹配度分数 (0-1)
 */
function calculateDateScore(userDate, targetDates) {
  const userDateTime = new Date(userDate).getTime();
  
  // 检查是否有完全匹配的日期
  if (targetDates.includes(userDate)) {
    return 1;
  }
  
  // 计算最接近的日期差异
  const differences = targetDates.map(date => {
    const targetTime = new Date(date).getTime();
    return Math.abs(targetTime - userDateTime);
  });
  
  const minDifference = Math.min(...differences);
  const maxAcceptableDifference = 30 * 24 * 60 * 60 * 1000; // 30天的毫秒数
  
  return Math.max(0, 1 - (minDifference / maxAcceptableDifference));
}

/**
 * 计算目的地匹配度
 * @param {string} userDestination - 用户目的地
 * @param {string[]} targetDestinations - 目标用户意向目的地数组
 * @returns {number} 匹配度分数 (0-1)
 */
function calculateDestinationScore(userDestination, targetDestinations) {
  return targetDestinations.includes(userDestination) ? 1 : 0;
}

/**
 * 主匹配算法
 * @param {Object} userPreferences - 用户偏好
 * @returns {Array} 匹配结果数组，按匹配度排序
 */
export function findMatches(userPreferences) {
  const matches = userProfiles.map(targetUser => {
    // 计算各维度的匹配分数
    const budgetScore = calculateBudgetScore(
      userPreferences.budget,
      targetUser.travelPreferences.budget
    );
    
    const dateScore = calculateDateScore(
      userPreferences.date,
      targetUser.travelPreferences.availableDates
    );
    
    const destinationScore = calculateDestinationScore(
      userPreferences.destination,
      targetUser.travelPreferences.destinations
    );
    
    // 计算总匹配度 (可以调整各维度的权重)
    const totalScore = (
      budgetScore * 0.3 +      // 预算权重 30%
      dateScore * 0.3 +        // 日期权重 30%
      destinationScore * 0.4   // 目的地权重 40%
    );
    
    return {
      user: targetUser,
      matchScore: totalScore,
      details: {
        budgetScore,
        dateScore,
        destinationScore
      }
    };
  });
  
  // 按匹配度降序排序并过滤掉匹配度低的结果
  return matches
    .filter(match => match.matchScore > 0.6) // 只返回匹配度超过60%的结果
    .sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * 获取匹配建议
 * @param {Object} matchResult - 匹配结果
 * @returns {Object} 匹配建议
 */
export function getMatchingSuggestions(matchResult) {
  const { details } = matchResult;
  
  const suggestions = {
    budget: null,
    date: null,
    destination: null
  };
  
  // 根据各维度的匹配分数给出建议
  if (details.budgetScore < 0.7) {
    suggestions.budget = '建议适当调整预算以增加匹配机会';
  }
  
  if (details.dateScore < 0.7) {
    suggestions.date = '可以考虑更灵活的出行时间';
  }
  
  if (details.destinationScore < 1) {
    suggestions.destination = '可以考虑探索更多目的地选择';
  }
  
  return suggestions;
}

/**
 * 生成匹配报告
 * @param {Object} matchResult - 匹配结果
 * @returns {Object} 匹配报告
 */
export function generateMatchReport(matchResult) {
  const { user, matchScore, details } = matchResult;
  
  return {
    matchScore: Math.round(matchScore * 100),
    userInfo: {
      name: user.name,
      age: user.age,
      gender: user.gender,
      interests: user.interests,
      avatar: user.avatar,
      budget: user.travelPreferences.budget
    },
    compatibility: {
      budget: Math.round(details.budgetScore * 100),
      date: Math.round(details.dateScore * 100),
      destination: Math.round(details.destinationScore * 100)
    },
    suggestions: getMatchingSuggestions(matchResult),
    travelPreferences: {
      ...user.travelPreferences,
      budget: user.travelPreferences.budget
    }
  };
}

/**
 * 获取推荐的替代日期
 * @param {string} userDate - 用户期望日期
 * @param {Object} matchResult - 匹配结果
 * @returns {string[]} 推荐日期数组
 */
export function getRecommendedDates(userDate, matchResult) {
  const { user } = matchResult;
  const userDateTime = new Date(userDate).getTime();
  
  return user.travelPreferences.availableDates
    .map(date => ({
      date,
      difference: Math.abs(new Date(date).getTime() - userDateTime)
    }))
    .sort((a, b) => a.difference - b.difference)
    .slice(0, 3)
    .map(item => item.date);
} 