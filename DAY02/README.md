# JavaScript Fundamentals - DAY02

## Overview
This guide covers essential JavaScript concepts needed for automation testing: variable declarations (const, let), operators, and control flow statements (if/else, switch, loops).

---

## Variable Declaration

### const Keyword
- Cannot be redeclared or reinitialized
- Cannot be accessed before declaration (ReferenceError)
- Use for fixed values that should never change

### let Keyword
- Cannot be redeclared but can be reinitialized
- Block-scoped (confined to nearest block)
- Cannot be accessed before declaration (ReferenceError)
- Use for loop counters and temporary values

---

## Operators

### Arithmetic Operators
`+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus)

### Comparison Operators
- `==` (loose equality - checks value only)
- `===` (strict equality - checks value and type)
- `>`, `<`, `>=`, `<=`, `!=`, `!==`

### Increment & Decrement
- `a++` (post-increment: return value then increment)
- `++a` (pre-increment: increment then return value)
- `a--` and `--a` follow same logic with subtraction

---

## Control Flow

### if-else Statement
Execute code based on a condition. Use for boolean logic (e.g., checking subscription status).

### else-if Chain
Handle multiple conditions sequentially (e.g., income tax slabs).

### switch-case Statement
Compare a value against multiple cases for cleaner code (e.g., browser version lookup). Always include `break;` to prevent fall-through.

---

## Loops

### for Loop
Repeat code a known number of times. Example: print numbers 1-10 or filter even numbers.

### while Loop
Execute code while a condition is true. Condition checked before execution.

### do-while Loop
Execute code at least once, then repeat while condition is true.

### break Statement
Exit a loop early when a condition is met (e.g., stop exercising if unhealthy and completed 2 rounds).

---

## Key Points

| Feature | const | let |
|---------|-------|-----|
| Redeclare | ❌ | ❌ |
| Reinitialize | ❌ | ✅ |
| Block Scope | ✅ | ✅ |
| Before Declaration | ❌ ReferenceError | ❌ ReferenceError |

**Use `const` by default; use `let` when values change.**

Use strict equality (`===`) in comparisons to avoid type coercion issues.

---

## Common Errors

- `ReferenceError` - Accessing variable before declaration or outside scope
- `TypeError: Assignment to constant variable` - Trying to reassign const
- Missing `break` in switch - Code falls through to next case

---

## Real-World Examples

**Amazon Prime Check:** if subscriber is true → play video, else → redirect to subscription page

**Tax Calculation:** income ≤ 8000 (no tax), 8000-15000 (5% tax), > 15000 (20% tax)

**Browser Detection:** switch on browser name → return version number

**Health Routine:** loop 5 rounds, but break early if unhealthy and round > 2