const evaluate = require('./handEvaluator.js');

// Test 1
// Test for a straight flush
test('Straight Flush', () => {
    expect(evaluate(['2H', '3H', '4H', '5H', '6H'])).toBe('Straight Flush');
    }); 

// Test 2
// Test for a four of a kind
test('Four of a Kind', () => {
    expect(evaluate(['2H', '2C', '2D', '2S', '6H'])).toBe('Four of a Kind');
    });

// Test 3
// Test for a full house
test('Full House', () => {
    expect(evaluate(['2H', '2C', '2D', '6S', '6H'])).toBe('Full House');
    });

// Test 4
// Test for a flush
test('Flush', () => {
    expect(evaluate(['2H', '5H', '6H', '8H', '9H'])).toBe('Flush');
    });

// Test 5
// Test for a straight
test('Straight', () => {
    expect(evaluate(['2H', '3C', '4D', '5S', '6H'])).toBe('Straight');
    });

// Test 6
// Test for a three of a kind
test('Three of a Kind', () => {
    expect(evaluate(['2H', '2C', '2D', '5S', '6H'])).toBe('Three of a Kind');
    });

// Test 7
// Test for two pair
test('Two Pair', () => {
    expect(evaluate(['2H', '2C', '3D', '3S', '6H'])).toBe('Two Pair');
    });

// Test 8
// Test for a pair
test('Pair', () => {
    expect(evaluate(['2H', '2C', '4D', '5S', '6H'])).toBe('Pair');
    });

// Test 9
// Test for a high card
test('High Card', () => {
    expect(evaluate(['2H', '4C', '6D', '8S', '9H'])).toBe('High Card');
    });
