import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';

/**
 * A `Choice` component can be used to render a checkbox or radio button.
 *
 * Any _undocumented_ props that you pass to this component will be passed
 * to the `input` element, so you can use this to set additional attributes if
 * necessary.
 */
export const Choice = function(props) {
  /* eslint-disable prefer-const */
  let { // Using let rather than const since we sometimes rewrite id
    children,
    className,
    id,
    inversed,
    right,
    ...inputProps
  } = props;
  /* eslint-enable prefer-const */

  const inputClasses = classNames(
    'ds-c-choice',
    {
      'ds-c-choice--inverse': inversed,
      'ds-c-choice--right': right
    }
  );

  if (!id) {
    id = uniqueId(`${inputProps.type}_${inputProps.name}_`);
  }

  return (
    <div className={className}>
      <input
        className={inputClasses}
        id={id}
        {...inputProps}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

Choice.defaultProps = {
  type: 'checkbox'
};

Choice.propTypes = {
  /**
   * Label text or HTML.
   */
  children: PropTypes.node.isRequired,
  /**
   * **Note**: Setting this prop will render a read-only field. If the field should be
   * mutable, use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`
   */
  checked: PropTypes.bool,
  /**
   * Additional classes to be added to the root `div` element.
   */
  className: PropTypes.string,
  /**
   * Sets the initial checked state. Use this for an uncontrolled component;
   * otherwise, use the `checked` property.
   */
  defaultChecked: PropTypes.bool,
  /**
   * A unique ID to be used for the input field, as well as the label's
   * `for` attribute. A unique ID will be generated if one isn't provided.
   */
  id: PropTypes.string,
  /**
   * Applies the "inverse" UI theme
   */
  inversed: PropTypes.bool,
  /**
   * Displays the checkbox on the right side of the label
   */
  right: PropTypes.bool,
  /**
   * The `input` field's `name` attribute
   */
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /**
   * The `input` `value` attribute
   */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default Choice;
