const delayedPromise = (value, delay) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), delay);
    });
  };
  
  const promisess = [
    delayedPromise('Promise 1', 2000),
    delayedPromise('Promise 2', 1000),
    delayedPromise('Promise 3', 3000),
    delayedPromise('Promise 4', 1500),
    delayedPromise('Promise 5', 2500)
  ];
  
  Promise.all(promisess)
    .then(results => {
      console.log('All promises resolved:');
      console.log(results);
    })
    .catch(error => {
      console.error('One of the promises failed:', error);
    });

// Promise.all
// ['Promise 2', 'Promise 4', 'Promise 1', 'Promise 5', 'Promise 3']

const randomDelay = value => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    return new Promise(resolve => {
      setTimeout(() => resolve(value), delay);
    });
  };
  
  const promises = [
    randomDelay('Promise 1'),
    randomDelay('Promise 2'),
    randomDelay('Promise 3'),
    randomDelay('Promise 4'),
    randomDelay('Promise 5')
  ];
  
  Promise.race(promises)
    .then(result => {
      console.log('Fastest promise resolved:');
      console.log(result);
    })
    .catch(error => {
      console.error('Promise failed:', error);
    });
  