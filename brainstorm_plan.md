# Portfolio Page Variants Fix Plan

## Problem Analysis
The `letterVariants` object has a `visible` property that's a function expecting a custom parameter, but Framer Motion's variants system doesn't work well with dynamic functions in this context.

## Solution Strategy
1. **Fix the variants structure**: Remove the function-based approach and use direct animation props
2. **Maintain animation behavior**: Keep the staggered letter animation effect
3. **Simplify the code**: Use `transition.delay` directly instead of variants with custom functions

## Implementation Steps
1. Remove the problematic `letterVariants` object
2. Update the `motion.span` to use direct animation props
3. Calculate the delay directly in the transition object
4. Test that the staggered animation still works properly

## Expected Outcome
- No TypeScript/variants errors
- Maintained staggered letter animation effect
- Cleaner, more maintainable code
- Same visual result for users
