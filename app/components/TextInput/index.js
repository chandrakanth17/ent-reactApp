/**
 *
 * TextInput
 *
 */

import React from "react";
import styles from "./styles.css";

class TextInput extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  value() {
    return this.field.value;
  }
  render() {
    const { errorText } = this.props;
    const fieldError = errorText ? (
      <div className={styles.errorMessage}>{errorText}</div>
    ) : null;

    return (
      <div className={styles.textInput}>
        <input
          className={(styles.input, this.props.className)}
          placeholder={this.props.placeholder}
          ref={(f) => {
            this.field = f;
          }}
          type="text"
        />
        {fieldError}
      </div>
    );
  }
}
TextInput.propTypes = {
  errorText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
};
export default TextInput;
