import React from 'react';
import './Button.scss';

/**
 * Button component with primary and secondary variants.
 *
 * @param {object} props - Button props
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Button style variant
 * @param {React.ReactNode} props.children - Button content
 * @param {function} [props.onClick] - Click event handler
 * @param {string} [props.className] - Additional class names
 * @param {string} [props.type='button'] - Button type
 */
const Button = ({ variant = 'primary', children, onClick, className = '', type = 'button' }) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }

        window.open("https://www.linkedin.com/in/andrei-kandratovich/", '_blank');
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`btn btn--${variant} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
