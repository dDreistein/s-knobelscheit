import { assertEquals } from "@std/assert";

Deno.test("puzzle state flipped numbers gets correctly outputed as a string", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    const expectedString = ""

    // Act
    const actual = puzzle.flippedNumbersString()

    // Assert
    assertEquals(actual, expectedString);
});

Deno.test("puzzle state not flipped numbers gets correctly outputed as a string", function addTest() {
    // Arrange
    const puzzle = new Puzzle()
    const expectedString = "1 2 3 4 5 6 7 8 9"

    // Act
    const actual = puzzle.notFlippedNumbersString()

    // Assert
    assertEquals(actual, expectedString);
});
