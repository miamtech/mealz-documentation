import React from 'react';

/**
 * Badge component to display version information or status
 * 
 * @param {string} text - The text to display in the badge
 * @param {string} color - The color variant (primary, secondary, success, info, warning, danger)
 * @param {string} href - Optional link URL
 * @param {string} variant - Badge variant (filled or outlined)
 */
export default function Badge({ text, color = 'primary', href, variant = 'filled' }) {
  const colorClasses = {
    primary: variant === 'filled' ? 'bg-primary text-white' : 'border-primary text-primary',
    secondary: variant === 'filled' ? 'bg-secondary text-white' : 'border-secondary text-secondary',
    success: variant === 'filled' ? 'bg-success text-white' : 'border-success text-success',
    info: variant === 'filled' ? 'bg-info text-white' : 'border-info text-white',
    warning: variant === 'filled' ? 'bg-warning text-dark' : 'border-warning text-warning',
    danger: variant === 'filled' ? 'bg-danger text-white' : 'border-danger text-danger',
    blue: variant === 'filled' ? 'bg-blue text-white' : 'border-blue text-blue',
  };

  const baseStyles = {
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    lineHeight: '1',
    borderRadius: '0.25rem',
    textDecoration: 'none',
    marginLeft: '0.5rem',
    verticalAlign: 'middle',
    border: variant === 'outlined' ? '1px solid' : 'none',
  };

  const colorStyles = {
    primary: {
      backgroundColor: variant === 'filled' ? '#007bff' : 'transparent',
      color: variant === 'filled' ? '#fff' : '#007bff',
      borderColor: variant === 'outlined' ? '#007bff' : 'transparent',
    },
    secondary: {
      backgroundColor: variant === 'filled' ? '#6c757d' : 'transparent',
      color: variant === 'filled' ? '#fff' : '#6c757d',
      borderColor: variant === 'outlined' ? '#6c757d' : 'transparent',
    },
    success: {
      backgroundColor: variant === 'filled' ? '#28a745' : 'transparent',
      color: variant === 'filled' ? '#fff' : '#28a745',
      borderColor: variant === 'outlined' ? '#28a745' : 'transparent',
    },
    info: {
      backgroundColor: variant === 'filled' ? '#17a2b8' : 'transparent',
      color: variant === 'filled' ? '#fff' : '#17a2b8',
      borderColor: variant === 'outlined' ? '#17a2b8' : 'transparent',
    },
    warning: {
      backgroundColor: variant === 'filled' ? '#ffc107' : 'transparent',
      color: variant === 'filled' ? '#000' : '#ffc107',
      borderColor: variant === 'outlined' ? '#ffc107' : 'transparent',
    },
    danger: {
      backgroundColor: variant === 'filled' ? '#dc3545' : 'transparent',
      color: variant === 'filled' ? '#fff' : '#dc3545',
      borderColor: variant === 'outlined' ? '#dc3545' : 'transparent',
    },
    blue: {
      backgroundColor: variant === 'filled' ? '#007bff' : 'transparent',
      color: variant === 'filled' ? '#fff' : '#007bff',
      borderColor: variant === 'outlined' ? '#007bff' : 'transparent',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...(colorStyles[color] || colorStyles.primary),
  };

  const hoverStyles = {
    opacity: href ? '0.8' : '1',
    cursor: href ? 'pointer' : 'default',
  };

  const BadgeContent = () => (
    <span
      style={combinedStyles}
      onMouseEnter={(e) => href && (e.target.style.opacity = '0.8')}
      onMouseLeave={(e) => href && (e.target.style.opacity = '1')}
    >
      {text}
    </span>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        <BadgeContent />
      </a>
    );
  }

  return <BadgeContent />;
}

