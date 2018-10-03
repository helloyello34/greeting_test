const greeting = require('./greeting');

test("returns greeting with custom name", () => {
	expect(greeting("Holmes")).toBe("Hello, Holmes!");
});	
