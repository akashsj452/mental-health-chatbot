# Contributing to Mental Health Chatbot

First off, thank you for considering contributing to Mental Health Chatbot! It's people like you that make it such a great tool for supporting mental health and wellbeing.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details:**
  - OS and version
  - Browser and version
  - Node.js version
  - Python version
  - Any relevant error messages

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and the expected behavior**
* **Explain why this enhancement would be useful to most users**
* **List some other applications where this enhancement exists, if applicable**

### Pull Requests

* Fill in the required template
* Follow the styleguides
* Include appropriate test cases
* Update documentation as needed
* End all files with a newline
* Avoid platform-dependent code

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/mental-health-chatbot.git
   cd mental-health-chatbot
   ```

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install dependencies**
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd frontend && npm install
   
   # NLP Service
   cd nlp-service && pip install -r requirements.txt
   ```

4. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start development servers**
   ```bash
   docker-compose up
   # Or run services individually
   ```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Use conventional commits format:
  ```
  feat: add new feature
  fix: resolve issue
  docs: update documentation
  style: fix formatting
  refactor: reorganize code
  test: add tests
  chore: update dependencies
  ```

### JavaScript/TypeScript Styleguide

* Use semicolons
* Use 2 spaces for indentation
* Use `const` for constants, `let` for variables
* Use arrow functions when appropriate
* Use template literals for strings with variables
* Add JSDoc comments for functions and classes
* Use meaningful variable and function names
* Keep functions small and focused

### Python Styleguide

* Follow PEP 8
* Use 4 spaces for indentation
* Use type hints
* Add docstrings to all modules, functions, and classes
* Use black for code formatting
* Use meaningful variable and function names

### React/TypeScript Styleguide

* Use functional components with hooks
* Use meaningful component and variable names
* Keep components small and focused
* Extract complex logic to custom hooks
* Use TypeScript for type safety
* Add prop documentation

### CSS/Tailwind Styleguide

* Use Tailwind CSS classes
* Organize classes logically (layout, spacing, sizing, colors, etc.)
* Use custom CSS only when necessary
* Use CSS variables for theme colors
* Keep classes concise and readable

## Testing

* Write tests for new features
* Ensure all tests pass before submitting a PR
* Maintain or improve code coverage
* Use meaningful test descriptions

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# NLP service tests
cd nlp-service && pytest
```

## Documentation

* Update README.md if you add new features
* Add docstrings to code
* Update API documentation if you modify endpoints
* Create architecture diagrams for complex features
* Document any new environment variables in .env.example

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on
* `security` - Security related issue
* `mental-health` - Mental health specific concerns

### Recognition

Contributors will be recognized in:
- README.md
- Release notes
- CONTRIBUTORS.md (coming soon)
- Project website

## Questions?

Feel free to open an issue or reach out to the maintainers. We're here to help!

---

Thank you for contributing! 🎉
