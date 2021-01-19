const validationRules = (values) => {
    const errors = {};

    // Review Errors
    if (!values.review) {
        errors.review = 'Review is required!';
    } else if (values.review.length < 50) {
        errors.review = 'Review must have at least 50 characters.';
    }

    // Rating Errors
    if (values.rating === 0) {
        errors.rating = 'Rating is required!';
    }

    // Name Errors
    if (!values.name) {
        errors.name = 'Name is required!';
    } else if (values.name.length < 3) {
        errors.name = 'Name must have at least 3 characters.';
    }

    return errors;
};

export default validationRules;
