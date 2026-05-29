/**
 * Form Validation Utilities
 * Comprehensive validation functions for all form fields
 */

export const validators = {
    // Email validation
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Phone validation (accepts various formats)
    isValidPhone: (phone) => {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    },

    // Name validation (at least 2 characters, letters and spaces)
    isValidName: (name) => {
        return name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name);
    },

    // Non-empty validation
    isNotEmpty: (value) => {
        return value && value.trim().length > 0;
    },

    // Minimum length validation
    minLength: (value, length) => {
        return value && value.trim().length >= length;
    },

    // Date validation (must be future date)
    isFutureDate: (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    },

    // Time validation format (HH:MM)
    isValidTime: (time) => {
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        return timeRegex.test(time);
    },
};

export const validateField = (fieldName, value) => {
    const errors = {};

    switch (fieldName) {
        case 'fullName':
            if (!validators.isNotEmpty(value)) {
                errors.fullName = 'Full name is required';
            } else if (!validators.isValidName(value)) {
                errors.fullName = 'Please enter a valid name (letters and spaces only)';
            }
            break;

        case 'email':
            if (!validators.isNotEmpty(value)) {
                errors.email = 'Email is required';
            } else if (!validators.isValidEmail(value)) {
                errors.email = 'Please enter a valid email address';
            }
            break;

        case 'phone':
            if (!validators.isNotEmpty(value)) {
                errors.phone = 'Phone number is required';
            } else if (!validators.isValidPhone(value)) {
                errors.phone = 'Please enter a valid phone number';
            }
            break;

        case 'country':
            if (!validators.isNotEmpty(value)) {
                errors.country = 'Country is required';
            }
            break;

        case 'inMinistry':
            if (value === '') {
                errors.inMinistry = 'Please select whether you are in ministry';
            }
            break;

        case 'purpose':
            if (!validators.isNotEmpty(value)) {
                errors.purpose = 'Purpose is required';
            } else if (!validators.minLength(value, 10)) {
                errors.purpose = 'Purpose must be at least 10 characters';
            }
            break;

        case 'message':
            if (!validators.minLength(value, 5)) {
                errors.message = 'Message must be at least 5 characters';
            }
            break;

        case 'preferredDate':
            if (!validators.isNotEmpty(value)) {
                errors.preferredDate = 'Please select a date';
            } else if (!validators.isFutureDate(value)) {
                errors.preferredDate = 'Please select a future date';
            }
            break;

        case 'preferredTime':
            if (!validators.isNotEmpty(value)) {
                errors.preferredTime = 'Please select a time';
            } else if (!validators.isValidTime(value)) {
                errors.preferredTime = 'Please enter a valid time (HH:MM)';
            }
            break;

        case 'appointmentType':
            if (!validators.isNotEmpty(value)) {
                errors.appointmentType = 'Please select an appointment type';
            }
            break;

        default:
            break;
    }

    return errors;
};

export const validateVolunteerForm = (formData) => {
    const errors = {};

    if (!validators.isNotEmpty(formData.fullName)) {
        errors.fullName = 'Full name is required';
    } else if (!validators.isValidName(formData.fullName)) {
        errors.fullName = 'Please enter a valid name';
    }

    if (!validators.isNotEmpty(formData.email)) {
        errors.email = 'Email is required';
    } else if (!validators.isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!validators.isNotEmpty(formData.phone)) {
        errors.phone = 'Phone number is required';
    } else if (!validators.isValidPhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
    }

    if (!validators.isNotEmpty(formData.country)) {
        errors.country = 'Country is required';
    }

    if (formData.inMinistry === '') {
        errors.inMinistry = 'Please select whether you are in ministry';
    }

    if (!validators.isNotEmpty(formData.purpose)) {
        errors.purpose = 'Purpose for joining is required';
    } else if (!validators.minLength(formData.purpose, 10)) {
        errors.purpose = 'Purpose must be at least 10 characters';
    }

    return errors;
};

export const validateAppointmentForm = (formData) => {
    const errors = {};

    if (!validators.isNotEmpty(formData.fullName)) {
        errors.fullName = 'Full name is required';
    } else if (!validators.isValidName(formData.fullName)) {
        errors.fullName = 'Please enter a valid name';
    }

    if (!validators.isNotEmpty(formData.email)) {
        errors.email = 'Email is required';
    } else if (!validators.isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!validators.isNotEmpty(formData.phone)) {
        errors.phone = 'Phone number is required';
    } else if (!validators.isValidPhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
    }

    if (!validators.isNotEmpty(formData.country)) {
        errors.country = 'Country is required';
    }

    if (!validators.isNotEmpty(formData.preferredDate)) {
        errors.preferredDate = 'Please select a date';
    } else if (!validators.isFutureDate(formData.preferredDate)) {
        errors.preferredDate = 'Please select a future date';
    }

    if (!validators.isNotEmpty(formData.preferredTime)) {
        errors.preferredTime = 'Please select a time';
    }

    if (!validators.isNotEmpty(formData.appointmentType)) {
        errors.appointmentType = 'Please select an appointment type';
    }

    return errors;
};
