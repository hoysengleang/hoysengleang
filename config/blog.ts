export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: string;
  tags: string[];
  coverImage?: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "5",
    title: "Building Reliable Backend Services with Laravel and NestJS",
    slug: "building-reliable-backend-services-laravel-nestjs",
    excerpt:
      "Practical habits for building dependable backend services with Laravel and NestJS, from validation and transactions to queues, observability, and clear API contracts.",
    content: `# Building Reliable Backend Services with Laravel and NestJS

Reliability is not one feature that can be added at the end of a project. It is the result of many small engineering decisions: validating inputs, protecting data changes, returning predictable API responses, and making failures understandable.

Laravel and NestJS both provide strong foundations for this work. The framework is important, but the habits around it matter even more.

## Start with Clear Boundaries

Keep each part of the backend responsible for one job.

- **Controllers** should receive requests, validate them, and return responses.
- **Services** should hold business rules and workflows.
- **Data-access code** should keep database queries focused and reusable.
- **Jobs and queues** should handle work that does not need to finish during the request.

This separation makes a feature easier to read, test, and change. It also avoids putting complex business rules directly inside controllers, where they quickly become difficult to maintain.

## Validate at Every Entry Point

Never assume a request contains correct data. Validation protects the application before business logic runs.

In Laravel, Form Requests provide a clean place for request rules. In NestJS, DTOs with validation pipes provide the same kind of contract. The principle is identical: define what the API accepts, reject invalid input early, and return useful error messages.

Good validation should cover more than required fields. It should also check formats, allowed values, permissions, and relationships between fields. For example, an end date should not be before its start date, and a user should not be able to update a record outside their access scope.

## Protect Multi-Step Data Changes

Many business actions update more than one record. Creating an order might update inventory, create payment data, and write an audit record. If one step fails, the data must not be left half-finished.

Use database transactions for related writes that must succeed or fail together.

- Begin a transaction before the related changes.
- Create or update each required record.
- Write the necessary audit information.
- Commit only after every step has completed successfully.

Transactions are especially important when working with balances, stock, approvals, or status transitions. They turn a group of related changes into one reliable unit of work.

## Make API Responses Predictable

Frontend developers should not have to guess the shape of every response. A consistent API contract helps the whole team move faster.

- Use the same response shape for successful requests.
- Return meaningful HTTP status codes.
- Keep validation errors structured and easy to display.
- Avoid exposing internal exception details to users.
- Document endpoints, required fields, and error cases.

Laravel API Resources and NestJS response DTOs are both useful tools for keeping response data intentional. They help prevent accidental exposure of database fields and keep APIs stable as the application grows.

## Move Slow Work to Queues

Sending notifications, generating reports, processing uploads, and calling non-critical external services can slow down an API request. Queue these tasks when the user does not need an immediate result.

The request can return quickly after saving the important data, while a worker handles the background task. This improves the user experience and helps protect the application during busy periods.

Queued work still needs care. Jobs should be retry-safe, log failures, and avoid creating duplicate results when a retry happens. A reliable queue is not only about running in the background; it is about recovering safely when something goes wrong.

## Observe, Learn, and Improve

Production reliability depends on visibility. Log useful context, track failed jobs, monitor response times, and investigate recurring errors. When an issue is reported, the goal is to understand what happened without reproducing the entire situation from memory.

Start with practical signals:

- Error rates and application exceptions
- Slow endpoints and database queries
- Failed or delayed queue jobs
- Important business events, such as completed or rejected actions

Logs should help answer what happened, when it happened, and which request or record was involved. They should never include secrets, passwords, or sensitive personal data.

## Final Thought

Laravel and NestJS make it possible to build clean, scalable applications. Reliability comes from applying the same standards consistently: validate early, keep business rules organized, protect related data with transactions, handle slow work asynchronously, and make production behavior visible.

Those practices create backend services that teammates can trust and users can depend on.`,
    publishedAt: new Date("2026-08-08"),
    author: "Houy Sengleang",
    tags: ["Laravel", "NestJS", "Backend", "Reliability"],
    featured: true,
  },
  {
    id: "6",
    title: "End-to-End API Contracts for Laravel and NestJS Teams",
    slug: "end-to-end-api-contracts-laravel-nestjs-teams",
    excerpt:
      "How a shared API contract connects requirements, backend implementation, frontend integration, testing, and release support in Laravel and NestJS projects.",
    content: `# End-to-End API Contracts for Laravel and NestJS Teams

When a frontend and backend team share a clear API contract, end-to-end feature delivery becomes much smoother. The frontend knows what to send and what to expect. The backend has a precise definition of the data it must support. QA can test the same behavior without relying on assumptions.

Whether a service uses Laravel or NestJS, the contract should remain understandable, consistent, and documented.

## Define the Request Before the Implementation

Before writing a controller or service, agree on the endpoint purpose, request fields, response shape, and error cases. A short example is often enough to prevent rework later.

For example, a create-project request might require a **name** and an allowed **status** value. The contract should make those expectations clear before implementation begins.

For each endpoint, identify the required fields, optional fields, allowed values, and authorization rules. This turns a vague feature request into a concrete interface that both frontend and backend developers can work with.

## Keep Naming Consistent

Inconsistent names create unnecessary integration bugs. Choose conventions early and use them across every endpoint.

- Use one case style for JSON fields, such as camelCase or snake_case.
- Use consistent names for identifiers, timestamps, pagination, and status fields.
- Keep resource paths predictable.
- Use the same error format across the API.

For example, if one endpoint returns createdAt, other endpoints should not return created_at unless there is a deliberate, documented reason. Consistency is a small detail with a large effect on maintainability.

## Treat Errors as Part of the Contract

An API is not complete when only the success response is defined. Clients also need to handle validation failures, authentication issues, missing records, and conflicts.

A useful error response tells the client what happened without exposing internal implementation details. For validation errors, include a field-level message that a form can display. For unexpected errors, return a safe general message and keep the technical context in server-side logs.

## Version Carefully

Changing a response field can break a frontend that depends on it. Prefer additive changes when possible: add a new optional field, keep the old field during a transition, and communicate the deprecation plan.

When a breaking change is unavoidable, version the API deliberately. A version is not a substitute for good communication, but it gives teams room to migrate without blocking each other.

## Document the Real Behavior

Documentation should reflect the API that is actually running. Keep examples close to the implementation and update them in the same pull request as the endpoint.

Tools such as OpenAPI can help describe routes, requests, and responses. Even without a generated specification, a maintained collection or a small endpoint guide is much better than undocumented assumptions.

## Test the Contract

Backend tests should verify important response shapes, validation rules, and authorization cases. Frontend teams can use mocked responses that match the same contract. This catches integration issues before they reach users.

For higher-risk endpoints, add tests for these cases:

- A valid request succeeds with the expected response shape.
- Invalid fields return clear validation messages.
- Unauthorized users cannot access protected data.
- Missing records return a predictable not-found response.
- Failed dependent actions do not leave partial database changes.

## Final Thought

A well-defined API contract is a collaboration tool. It reduces guesswork, protects existing integrations, and allows Laravel and NestJS services to evolve with confidence. The goal is not more documentation for its own sake; it is a shared agreement that makes every feature easier to build, test, and maintain.`,
    publishedAt: new Date("2026-07-22"),
    author: "Houy Sengleang",
    tags: ["API Design", "Laravel", "NestJS", "Full Stack"],
    featured: false,
  },
  {
    id: "1",
    title: "Optimizing Database Queries in Laravel: A Complete Guide",
    slug: "optimizing-database-queries-laravel",
    excerpt:
      "A practical Laravel workflow for measuring slow queries, applying targeted indexes, removing N+1 queries, and validating the result.",
    content: `# Optimizing Database Queries in Laravel: A Complete Guide

This guide explains the techniques I use to investigate and improve database performance in Laravel applications. In one production workflow, the measured changes reduced response time by 60%; the same process can be applied without assuming that every query needs the same solution.

## The Challenge

As the loan-management dataset grew, several high-use workflows became noticeably slower during busy periods:

- **Query Response Times**: Some requests took several seconds
- **User Experience**: Noticeable lag during peak hours
- **System Load**: Expensive queries consumed unnecessary database resources
- **Business Impact**: Customer complaints about slow processing

The system was handling critical financial operations where every second counted. We needed a systematic approach to identify and resolve these bottlenecks without disrupting ongoing operations.

## Diagnosis: Finding the Bottlenecks

Before implementing any solutions, I conducted a thorough analysis using Laravel's built-in query logging and database profiling tools.

### Performance Profiling Tools

- Identified slow queries taking over 1 second
- Analyzed query execution plans using **EXPLAIN**
- Monitored database metrics using MySQL's performance schema
- Used **Laravel Telescope** for real-time query monitoring

### Key Findings

The analysis revealed several critical issues:

- **N+1 Query Problems**: Loading relationships without eager loading
- **Missing Indexes**: Queries scanning entire tables instead of using indexes
- **Inefficient JOINs**: Complex multi-table joins without proper optimization
- **Large Dataset Queries**: Fetching unnecessary columns and records

## Solutions Implemented

### 1. Database Indexing Strategy

**The Problem**: Full table scans on queries filtering by multiple columns.

**The Solution**: Implemented strategic composite indexes on frequently queried columns. Added indexes for common query patterns like filtering by branch_id, status, and created_at together.

**Impact**: The loan-listing workflow stopped relying on full table scans and became consistently faster under representative data volume.

### 2. Eager Loading Implementation

**The Problem**: Classic N+1 query issue loading loan relationships.

Transformed inefficient queries that loaded relationships one by one into optimized eager-loaded queries using **with()** method. This dramatically reduced database round trips.

**Impact**: Loading relationships in batches removed repeated per-record queries and substantially reduced database round trips.

### 3. Query Optimization Techniques

**Selective Column Loading**: Only fetch needed columns instead of using SELECT *

**Database-Level Aggregations**: Let the database handle COUNT, SUM, and AVG operations

**Efficient Pagination**: Use cursor pagination for large datasets instead of offset-based pagination

**Query Scopes**: Created reusable, optimized query logic

### 4. Caching Strategy

Implemented **Redis caching** for frequently accessed data:

- Active loan counts
- Dashboard statistics
- User preferences
- Lookup tables

Cache invalidation was carefully designed to ensure data consistency while maximizing cache hit rates.

### 5. Connection Pooling

Optimized database connection management to reduce overhead from establishing connections for each request.

## Results and Impact

The changes were compared using the same representative requests and data volume before and after each optimization.

### Performance Metrics

- **60% reduction** in response time for the targeted production workflow
- Fewer repeated relationship queries through eager loading
- More predictable response times during busy operating periods
- Lower database work for common list and dashboard requests

### How to Report the Result

Record the endpoint, dataset size, query count, and response-time sample before and after the change. This makes the result repeatable and avoids presenting a single local measurement as a guarantee for the entire system.

## Key Takeaways

### Essential Principles for Database Optimization

- **Measure First**: Always profile before optimizing. Use data to drive decisions.
- **Index Strategically**: Not all columns need indexes. Focus on columns used in WHERE, JOIN, and ORDER BY clauses.
- **Eager Load Relationships**: Prevent N+1 queries by loading related data upfront.
- **Cache Wisely**: Cache frequently accessed, slowly changing data. Implement proper invalidation.
- **Monitor Continuously**: Use tools like Laravel Telescope in development and APM tools in production.

### Tools and Resources

- **Laravel Telescope**: Real-time query monitoring and debugging
- **Laravel Debugbar**: Development profiling with detailed query information
- **MySQL EXPLAIN**: Query execution plan analysis
- **Redis**: High-performance caching layer
- **New Relic/Scout APM**: Production monitoring and alerting

### Common Pitfalls to Avoid

- **Over-indexing**: Too many indexes slow down INSERT/UPDATE operations
- **Premature Optimization**: Profile first, optimize bottlenecks
- **Ignoring Cache Invalidation**: Stale cache can show incorrect data
- **Not Testing with Production Data Volume**: Test optimizations with realistic data sizes

## Advanced Techniques

### Database Query Optimization

- Use **UNION** instead of **OR** for better performance in some cases
- Implement **partial indexes** for conditional queries
- Consider **materialized views** for complex aggregations
- Use **database partitioning** for very large tables

### Application-Level Optimization

- Implement **background jobs** for heavy operations
- Use **database replicas** for read-heavy workloads
- Consider **database sharding** for horizontal scaling
- Implement **query result streaming** for large datasets

## Monitoring and Maintenance

Optimization is not a one-time task. We implemented:

- **Automated Alerts**: CPU > 80%, Slow Query Log monitoring
- **Weekly Performance Reviews**: Analyze slow query logs
- **Monthly Index Analysis**: Identify unused indexes
- **Quarterly Capacity Planning**: Scale resources proactively

## Conclusion

Database optimization is not a one-time task but an ongoing process of measurement, implementation, and monitoring. By systematically identifying bottlenecks, implementing strategic indexes, eliminating N+1 queries, and leveraging caching, we transformed a sluggish system into a high-performance application capable of handling enterprise-scale operations.

These techniques aren't just applicable to Laravel—the principles apply to any modern web application dealing with complex database operations. The key is to:

1. Start with accurate measurements
2. Implement targeted optimizations
3. Monitor the impact continuously
4. Iterate based on real-world results

**Remember**: Premature optimization is the root of all evil, but informed optimization based on real metrics is the path to scalable, performant applications that delight users and enable business growth.

**Pro Tip**: Document your optimizations! Future you (and your team) will thank you when similar issues arise.`,
    publishedAt: new Date("2024-12-15"),
    author: "Houy Sengleang",
    tags: ["Laravel", "Database", "Performance", "Optimization"],
    featured: true,
  },
  {
    id: "2",
    title: "Building Scalable RESTful APIs with Laravel",
    slug: "building-scalable-restful-apis-laravel",
    excerpt:
      "Practical patterns for designing maintainable Laravel APIs with clear contracts, authorization, validation, documentation, and observability.",
    content: `# Building Scalable RESTful APIs with Laravel

API architecture is the backbone of modern web applications, especially in financial systems where reliability, security, and performance are essential. This guide distills lessons from designing and documenting 50+ RESTful endpoints for multi-branch financial workflows without exposing confidential transaction values.

## The Foundation: API Design Principles

Before writing a single line of code, establishing solid architectural principles is crucial for long-term success and maintainability.

### 1. Resource-Based Architecture

The foundation of RESTful design is thinking in resources, not actions. Your API should represent **what**, not **how**.

**Core Principles**:
- URLs represent resources, not actions
- HTTP methods define operations (GET, POST, PUT, DELETE)
- Consistent naming conventions across all endpoints
- Nested resources for hierarchical relationships

**Example Structure**:
- GET /api/v1/loans - List all loans
- POST /api/v1/loans - Create new loan
- GET /api/v1/loans/{id} - Get specific loan
- PUT /api/v1/loans/{id} - Update loan
- DELETE /api/v1/loans/{id} - Delete loan
- GET /api/v1/loans/{id}/payments - Get loan payments

### 2. Versioning Strategy

**Why Versioning Matters**:
- Allows API evolution without breaking existing clients
- Enables gradual migration to new features
- Supports multiple client versions simultaneously

We use **URL path versioning** for its simplicity and visibility.

### 3. Consistent Response Structure

Standardized responses make API consumption predictable and easier to handle.

**Success Response Format**:
- success: true/false
- data: The actual response data
- message: Human-readable message
- meta: Additional metadata (timestamps, pagination, etc.)

**Error Response Format**:
- success: false
- error: Object with code, message, and details
- meta: Timestamp and request ID for debugging

## Security Implementation

Security in financial APIs isn't optional—it's fundamental and must be built in from day one.

### 1. Authentication with JWT

**Why JWT (JSON Web Tokens)**:
- Stateless authentication (no server-side session storage)
- Scalable across multiple servers
- Contains user claims and permissions
- Tamper-proof with signature verification

We implemented JWT with refresh tokens for enhanced security while maintaining good user experience.

### 2. Rate Limiting

Prevent API abuse and ensure fair usage across all clients.

**Implementation Strategy**:
- 60 requests per minute per user for standard endpoints
- 10 requests per minute for resource-intensive operations
- Exponential backoff for repeated violations
- Clear rate limit headers in responses

### 3. Input Validation and Sanitization

**Never trust user input**. Always validate and sanitize every request.

**Validation Layers**:
- Type validation (string, number, boolean)
- Format validation (email, URL, date)
- Business logic validation (amount ranges, status transitions)
- SQL injection prevention
- XSS attack prevention

### 4. Authorization and Permissions

Implemented **role-based access control (RBAC)** with granular permissions:

- Admin: Full access to all resources
- Manager: Branch-level access and reporting
- Officer: Loan processing and customer management
- Auditor: Read-only access for compliance

## API Resource Transformation

Laravel API Resources provide an elegant way to transform models into JSON responses.

### Benefits of API Resources

- **Separation of Concerns**: Business logic separate from presentation
- **Consistency**: Uniform response structure
- **Flexibility**: Easy to modify without changing models
- **Performance**: Control exactly what data is included
- **Conditional Loading**: Include relationships only when needed

### Collection Resources with Metadata

Pagination, filtering, and sorting information included automatically for better client-side handling.

## Error Handling

Comprehensive error handling ensures robust API behavior and better developer experience.

### Error Categories

- **4xx Client Errors**: Request problems (validation, authentication)
- **5xx Server Errors**: Internal server issues
- **Custom Business Errors**: Domain-specific failures

### Error Response Best Practices

- Use appropriate HTTP status codes
- Include machine-readable error codes
- Provide helpful error messages
- Never expose sensitive internals
- Log errors for debugging

## Documentation with OpenAPI/Swagger

**Documentation is as important as the code itself**. We use OpenAPI 3.0 specification for:

- Interactive API documentation
- Auto-generated client SDKs
- Request/response validation
- API testing interface

### Documentation Strategy

- **Inline Annotations**: Document directly in controller code
- **Auto-Generation**: Use tools to generate OpenAPI spec
- **Postman Collections**: Provide ready-to-use API collections
- **Code Examples**: Include examples in multiple languages
- **Changelog**: Track API changes and breaking updates

## Performance Optimization

### 1. Efficient Database Queries

- Use **eager loading** to prevent N+1 queries
- Implement **query caching** for frequently accessed data
- Use **database indexes** strategically
- Paginate large result sets

### 2. Response Caching

- Cache **GET requests** when appropriate
- Use **cache tags** for easy invalidation
- Implement **ETags** for conditional requests
- Set proper **Cache-Control** headers

### 3. API Response Compression

Enable response compression where payload size and client support make it useful, then measure the effect on representative responses.

### 4. Database Connection Pooling

Reduce overhead by reusing database connections across requests.

## Testing Strategy

**Comprehensive testing ensures API reliability**.

### Testing Layers

- **Unit Tests**: Individual components and methods
- **Feature Tests**: Complete API endpoints
- **Integration Tests**: Multiple endpoints working together
- **Load Tests**: Performance under stress
- **Security Tests**: Penetration testing and vulnerability scans

### Coverage Priorities

Choose coverage based on business risk rather than a vanity percentage. Prioritize:
- Happy path tests
- Error condition tests
- Edge case tests
- Authentication tests
- Authorization tests

## Monitoring and Observability

### Real-Time Monitoring

- **Request/Response Logging**: Track all API calls
- **Performance Metrics**: Response times, throughput
- **Error Tracking**: Automated error alerting
- **Health Checks**: Endpoint status monitoring

### Key Metrics

- **Availability**: Track successful health checks and service interruptions
- **Latency**: Monitor median and 95th-percentile response time
- **Throughput**: Measure request volume by endpoint and operating period
- **Error Rate**: Separate validation, authorization, dependency, and server errors

## Production Readiness Checklist

- Document success and error contracts for every endpoint
- Protect multi-record financial changes with database transactions
- Verify permissions at both route and record scope
- Test retry behavior for queued and external operations
- Establish latency, failure, and queue-health baselines before release

### Key Success Factors

- **Consistent Architecture**: Easy for teams to understand and extend
- **Comprehensive Documentation**: Gives frontend and QA teams one shared contract
- **Robust Error Handling**: Simplified debugging and support
- **Security First**: Protected against common vulnerabilities
- **Performance Optimization**: Handled scale without degradation

## Best Practices Summary

### Design

- Think in resources, not actions
- Version your API from day one
- Use consistent response structures
- Document everything

### Security

- Always use HTTPS
- Implement JWT authentication
- Add rate limiting
- Validate all inputs
- Use RBAC for authorization

### Performance

- Cache aggressively but wisely
- Optimize database queries
- Use pagination for large datasets
- Enable response compression
- Monitor continuously

### Maintenance

- Write comprehensive tests
- Monitor in real-time
- Log everything important
- Plan for backward compatibility
- Iterate based on usage patterns

## Conclusion

Building enterprise-grade RESTful APIs requires careful planning, consistent implementation, and ongoing maintenance. By following these principles and best practices, you can create APIs that are secure, performant, well-documented, and easy to consume.

**Key Takeaways**:
- Design with resources, not actions
- Security is non-negotiable
- Documentation saves time and reduces errors
- Test everything thoroughly
- Monitor continuously and iterate

The investment in proper API architecture pays dividends in maintainability, scalability, and developer experience—both for your team and API consumers.

**Remember**: Your API is a product. Treat it with the same care and attention you would give to any user-facing application.`,
    publishedAt: new Date("2024-11-20"),
    author: "Houy Sengleang",
    tags: ["Laravel", "API", "REST", "Backend"],
    featured: true,
  },
  {
    id: "3",
    title: "Getting Started with AI & Machine Learning in Python",
    slug: "getting-started-ai-ml-python",
    excerpt:
      "My journey into AI and Machine Learning, exploring TensorFlow, Pandas, and practical applications in data processing.",
    content: `# Getting Started with AI & Machine Learning in Python

As a backend developer with years of experience building scalable web applications, I've decided to expand my skill set into the fascinating world of Artificial Intelligence and Machine Learning. This article chronicles my learning journey, the challenges I've faced, and practical insights for fellow developers making a similar transition.

## Why AI/ML for Backend Developers?

The intersection of traditional software development and AI is creating unprecedented opportunities in today's tech landscape.

### Business Value

- **Intelligent Automation**: Automate complex decision-making processes
- **Predictive Analytics**: Forecast trends and user behavior accurately
- **Enhanced User Experience**: Personalization at scale
- **Operational Efficiency**: Optimize resource allocation and processes

### Technical Opportunities

- **API Enhancement**: Add intelligent features to existing APIs
- **Data Processing**: Transform raw data into actionable insights
- **Anomaly Detection**: Identify unusual patterns in system behavior
- **Natural Language Processing**: Process and understand user text

### Career Growth

The demand for developers who can bridge traditional software engineering and ML is skyrocketing. Understanding ML opens doors to building ML-powered products, architecting ML infrastructure, optimizing model deployment, and integrating AI into existing systems.

## My Structured Learning Path

### Phase 1: Python Fundamentals for Data Science

Coming from PHP and JavaScript, I needed to strengthen my Python skills specifically for data work.

**Essential Libraries I Mastered**:

**NumPy**: Foundation for numerical computing and array operations

**Pandas**: Data manipulation and analysis workhorse

**Matplotlib & Seaborn**: Data visualization

**Key Learning**: Data preparation takes 80% of the time in ML projects! This was a surprising revelation that changed how I approach problems.

### Phase 2: Understanding Machine Learning Concepts

**Supervised vs Unsupervised Learning**:

**Supervised Learning** (has labeled data):
- Classification: Predict categories (fraud/not fraud, loan approval)
- Regression: Predict continuous values (loan amount, house prices)

**Unsupervised Learning** (no labels):
- Clustering: Group similar data points (customer segmentation)
- Dimensionality Reduction: Simplify complex data (PCA, t-SNE)

**Real-World Application**: I built a loan default prediction model using supervised learning, achieving 85% accuracy in identifying high-risk loans before approval.

### Phase 3: Hands-On with scikit-learn

Started with simple models and gradually increased complexity:

1. **Linear Regression**: Predicting loan amounts
2. **Logistic Regression**: Binary classification
3. **Decision Trees**: Understanding decision logic
4. **Random Forests**: Ensemble methods for better accuracy
5. **Gradient Boosting**: XGBoost for production models

**Project**: Loan Default Prediction

Built an end-to-end ML pipeline:
- Data loading and exploration
- Feature engineering
- Train/test split
- Model training
- Evaluation and tuning
- Model persistence

**Results**: 85% accuracy in predicting loan defaults, helping reduce bad loans by 30%.

### Phase 4: Deep Learning with TensorFlow

**Understanding Neural Networks**:

Neural networks are inspired by human brain structure—layers of interconnected neurons processing information. They excel at:

- Image recognition
- Natural language processing
- Complex pattern recognition
- Non-linear relationships

**My First Neural Network**:

Built a multi-layer perceptron for loan risk assessment:
- Input layer: 10 features (income, credit score, etc.)
- Hidden layers: 64 and 32 neurons with ReLU activation
- Output layer: Binary classification (approve/reject)
- Dropout layers: Prevent overfitting

**Result**: 87% accuracy—better than traditional ML models!

## Practical Application: Integrating ML into Web Apps

This is where backend development skills truly shine!

### Creating an ML-Powered API

Built a Flask API that:
- Loads trained model on startup
- Accepts loan application data via POST request
- Scales features using saved scaler
- Returns prediction and confidence score
- Logs all predictions for monitoring

### Docker Deployment

Containerized the ML application for consistent deployment:
- Base Python image
- Install dependencies
- Copy trained models
- Expose API port
- Run with Gunicorn

### Model Monitoring

Implemented production monitoring:
- Prediction distribution tracking
- Model drift detection
- Performance metrics logging
- Automated retraining triggers

## Challenges I Faced

### 1. Mathematical Foundation

**Challenge**: ML involves linear algebra, calculus, and statistics.

**Solution**: 
- Started with Khan Academy for basics
- Focused on intuition over rigorous proofs
- Learned math as needed for specific algorithms
- Used visualization to understand concepts

### 2. Choosing the Right Algorithm

**Challenge**: Dozens of algorithms available—which to use?

**My Approach**:
- Start simple: Linear/Logistic Regression
- Then ensemble: Random Forest, XGBoost
- Try deep learning if data is large and complex
- Benchmark everything: Compare multiple approaches
- Choose based on accuracy + interpretability

### 3. Overfitting

**Challenge**: Model performs great on training data, poor on test data.

**Solutions Applied**:
- More data: Collected additional training examples
- Cross-validation: K-fold for robust evaluation
- Regularization: L1/L2 penalties
- Dropout: In neural networks
- Early stopping: Stop when validation degrades
- Simpler models: Sometimes less is more

### 4. Data Quality

**Challenge**: Real-world data is messy!

**Solutions**:
- Handle missing values: Imputation strategies
- Outlier detection: Statistical methods
- Feature engineering: Domain knowledge
- Data augmentation: Synthetic examples
- Data validation: Quality checks

## Tools and Resources

### Online Courses

- **Fast.ai**: Practical Deep Learning for Coders (highly recommended!)
- **Coursera**: Andrew Ng's Machine Learning Specialization
- **Kaggle Learn**: Hands-on micro-courses (free!)

### Books That Helped

- "Hands-On Machine Learning" by Aurélien Géron
- "Deep Learning with Python" by François Chollet
- "Python for Data Analysis" by Wes McKinney

### Practical Practice

- **Kaggle Competitions**: Real datasets, real problems
- **Personal Projects**: Applied ML to loan system data
- **Open Source**: Contributed to scikit-learn documentation

## What's Next: My ML Roadmap

### Short-term (3-6 months)

- Natural Language Processing for customer feedback analysis
- Time Series Forecasting for loan demand prediction
- Recommendation Systems for loan products
- Model Optimization for better accuracy

### Long-term (6-12 months)

- MLOps: Automated training and deployment
- Computer Vision: Document processing
- Reinforcement Learning: Optimize approval strategies
- Production ML: Scale to millions of requests

## Key Insights for Fellow Backend Developers

### You Already Have Advantages

- **Software Engineering Skills**: ML needs production code
- **API Development**: Perfect for serving models
- **Database Knowledge**: Crucial for training data
- **System Architecture**: Scalability matters
- **DevOps Experience**: MLOps is the next frontier

### Start Small and Practical

- Don't aim to build AlphaGo immediately
- Solve a real problem from your work
- Use existing libraries—don't reinvent
- Focus on end-to-end pipeline
- Measure business impact, not just accuracy

### Stay Practical

- ML is a tool, not magic
- Not every problem needs ML
- Simple heuristics often work well
- Always have a baseline to compare
- Deploy early, iterate quickly

## Real-World Impact

### Projects Completed

- **Loan Default Predictor**: 85% accuracy, reduced bad loans by 30%
- **Customer Segmentation**: Identified 5 distinct groups for targeted marketing
- **Demand Forecasting**: Predicted loan demand with 90% accuracy
- **Fraud Detection**: Early warning system for suspicious applications

### Lessons Learned

- Data quality matters more than algorithm choice
- Feature engineering is crucial
- Simple models often perform surprisingly well
- Production ML is different from notebook ML
- Continuous monitoring is essential

## Conclusion

Transitioning from backend development to AI/ML has been challenging but incredibly rewarding. The key is to approach it systematically, focus on practical applications, and leverage your existing software engineering skills.

ML isn't replacing traditional backend development—it's enhancing it. Developers who can bridge both worlds will be invaluable in building the next generation of intelligent applications.

**Remember**: You don't need a PhD to apply ML. Start with a real problem, learn the basics, experiment with simple models, and iterate. The journey of a thousand models begins with a single fit().

**Coming Next**: Building a production ML pipeline with FastAPI, Docker, and automated training—bridging the gap between ML experiments and production systems.

Stay curious, keep learning, and remember that every expert was once a beginner!`,
    publishedAt: new Date("2025-01-10"),
    author: "Houy Sengleang",
    tags: ["Python", "AI", "Machine Learning", "TensorFlow"],
    featured: true,
  },
  {
    id: "4",
    title: "localnet-control Is Live on PyPI: Share Local Services in Seconds",
    slug: "localnet-control-live-on-pypi",
    excerpt:
      "localnet-control is now fully published on PyPI. Learn what it does, how to install it, and how to share local services across your LAN with optional tunnel and access controls.",
    content: `# localnet-control Is Live on PyPI

\`localnet-control\` is now fully released on PyPI and ready to install with a single command.

- **Package**: https://pypi.org/project/localnet-control/
- **Latest version**: **0.2.0**
- **Release date**: **March 4, 2026**
- **Repository**: https://github.com/hoysengleang/localnet

As of **March 9, 2026**, version **0.2.0** is the latest release published on PyPI.

## What localnet-control Solves

During frontend, API, or full-stack development, we often need to share a local app quickly with teammates on the same Wi-Fi. This tool creates a lightweight TCP proxy so local services can be accessed across your LAN instantly.

You run your app on localhost, then share it:

\`\`\`bash
# your app
npm run dev

# share local service to LAN
localnet share 3000
\`\`\`

It prints a LAN URL and can show a QR code for mobile testing.

## Install from PyPI

\`\`\`bash
pip install localnet-control
\`\`\`

If you prefer working from source:

\`\`\`bash
git clone https://github.com/hoysengleang/localnet.git
cd localnet
pip install -e .
\`\`\`

## Key Features

- LAN-first sharing for local dev servers
- Optional public URL with Cloudflare Tunnel (\`--tunnel\`)
- Token auth for protected access (\`--token\`)
- IP/CIDR allow and deny rules (\`--allow\` / \`--deny\`)
- QR code output for fast mobile access
- Live HTTP request logging (\`--http-log\`)
- Service discovery support (\`localnet scan\`)

## Example Commands

\`\`\`bash
# share local port 3000
localnet share 3000

# require token
localnet share 3000 --token myteam123

# add public tunnel
localnet share 3000 --tunnel

# list active shares
localnet list

# stop share
localnet stop 3000
\`\`\`

## Platform Notes

Current release is **Linux-first**. macOS may work in many setups. Windows support is not yet the target for this version.

## Why This Release Matters

Publishing to PyPI makes installation and adoption much easier for teams:

1. No manual setup overhead
2. Faster onboarding for collaborators
3. Versioned releases with a clear upgrade path
4. Cleaner integration into Python-based dev workflows

If you are building APIs, frontend apps, or internal tools and need quick sharing in real environments, this package removes a lot of friction from daily development.`,
    publishedAt: new Date("2026-03-09"),
    author: "Houy Sengleang",
    tags: ["Python", "PyPI", "Networking", "Developer Tools"],
    featured: true,
  },
];

export const featuredPosts = blogPosts.filter((post) => post.featured);
