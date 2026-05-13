import { assertLessOrEqual } from "@std/assert/less-or-equal";
import { assertGreaterOrEqual } from "@std/assert/greater-or-equal";
import { assertEquals } from "@std/assert";

Deno.test("dice returns random number between 1-6", function addTest() {
    // Arrange
    const dice = new Dice();

    // Act
    const actual = dice.roll();

    // Assert
    assertLessOrEqual(actual, 6)
    assertGreaterOrEqual(actual,1)
});

Deno.test("adding two dices together gives back correct sum", function addTest() {
    // Arrange
    const dice1 = new Dice();
    const dice2 = new Dice();
    const expectedSum= dice1.roll() + dice2.roll();

    // Act
    const actual = Dice().sum(dice1,dice2)

    // Assert
    assertEquals(actual, expectedSum)
});