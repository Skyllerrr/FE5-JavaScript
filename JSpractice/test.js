function dessert(count, eat, good) {
  count < 3 ? eatDessert() : goodDessert();
}

function eatDessert() {
  console.log('오늘 먹어야 할 간식을 먹어주세요');
}

function goodDessert() {
  console.log('오늘 먹어야할 간식을 모두 먹었습니다');
}

dessert(4, eatDessert, goodDessert);