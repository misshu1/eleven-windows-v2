const validateInput = (values) => {
    let errors = {};

    // Review Errors
    if (!values.review) {
        errors.review = 'Review is required!';
    } else if (values.review.length < 50) {
        errors.review = 'Review must have at least 50 characters.';
    } else if (values.rating === 0) {
        errors.rating = 'Rating is required!';
    }

    return errors;
};

export default validateInput;
