# React Calculator

![React Calculator Preview](https://react-calculator-mu-dusky.vercel.app/preview.png)

A simple calculator component built with React. It supports basic arithmetic operations and handles input expressions with validation.

## Features

- Displays current input expression and calculated answer separately.
- Supports numbers (0-9), decimal points, and operators (`+`, `-`, `*`, `/`, `%`).
- Prevents multiple decimals in the same number.
- Prevents consecutive operators (replaces the last operator if user inputs another).
- Clear (AC) and Delete (DEL) functions to reset or edit the expression.
- Handles errors gracefully by displaying "Error" when evaluation fails.

## Component Structure

- `expression`: Holds the current mathematical expression as a string.
- `answer`: Holds the result of evaluating the expression.
- `handleClick`: Handles button clicks, updating expression or answer based on input type.

## Usage

This component is designed to be part of a React app. It uses data attributes (`data-role`, `data-value`) on buttons to identify the type and value of inputs.

---

> **Built for React tutorial practice and UI experimentation.**
