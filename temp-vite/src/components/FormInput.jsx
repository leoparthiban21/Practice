import React, { useState } from 'react';

const FormInput = ({ label, type, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPassword = type === 'password';

  return (
    <div className="form-group">
      <label htmlFor={label.toLowerCase().replace(' ', '-')}>
        {label}
      </label>
      
      {isPassword ? (
        <div className="password-input-group">
          <input
            id={label.toLowerCase().replace(' ', '-')}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      ) : (
        <input
          id={label.toLowerCase().replace(' ', '-')}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default FormInput;