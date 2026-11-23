function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.push(element)
}

function dequeue(queue) {
  if (queue.collection.length > 0) {
    return queue.collection.shift() 
  } else {
    return undefined
  }
}

function front(queue) {
  let qu = queue.collection
  if (qu.length > 0) {
    return qu[0]
  } else {
    return undefined
  }
}

function size(queue) {
  let qu = queue.collection
  return qu.length
}

function isEmpty(queue) {
  let qu = queue.collection
  if (qu.length === 0) {
    return true
  } else {
    return false
  }
}

let s = initQueue();
console.log(s);
console.log(size(s));