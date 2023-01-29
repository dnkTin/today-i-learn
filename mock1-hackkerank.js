async function getNumTransactions(username) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
  // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
  try {
      
      const response = await fetch(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
      const {data: userInfo} = await response.json()
      if (userInfo[0].id) {
          const response = await (await fetch(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userInfo[0].id}`)).json();
          console.log(response.total)
          return response.total;
      } else {
          return "Username Not Found";    
      }
  } catch {
      
      return "Username Not Found";
  }
}

getNumTransactions('epaga')