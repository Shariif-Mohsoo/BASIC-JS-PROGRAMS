//DECK FACTORY................................
const makeDeck = {
  deck: [],
  dropedCards: [],
  values: "A,2,3,4,5,6,7,8,9,10,K,Q,J".split(","),
  suits: ["HEART", "DIAMOND", "CLUB", "SPADE"],
  fillDeck() {
    const { values, suits } = this;
    for (let value of values) {
      for (let suit of suits) {
        this.deck.push({ value, suit });
      }
    }
  },
  dropSingleCard() {
    const card = this.deck.pop();
    this.dropedCards.push(card);
    // return card;
  },
  dropMultipleCards(number) {
    for (let i = 1; i <= number; i++) {
      this.dropSingleCard();
    }
  },
  shuffleCards() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  },
};
makeDeck.fillDeck();
console.log(makeDeck.deck);
makeDeck.shuffleCards();
console.log(makeDeck.deck);
makeDeck.dropMultipleCards(8);
console.log(makeDeck.dropedCards);
// makeDeck.dropMultipleCards(5);
