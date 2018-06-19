import React, { Component } from "react";
import { Link } from "react-router-dom";

class Submit extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form method="post" action="submit">
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input
                  type="text"
                  name="acct"
                  size="20"
                  autocorrect="off"
                  spellcheck="false"
                  autocapitalize="off"
                  autofocus="true"
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" size="20" />
              </td>
            </tr>
          </tbody>
          <br />
          <input type="submit" value="login" />
        </form>

        <h3>Create Account</h3>

        <form method="post" action="submit">
          <input type="hidden" name="creating" value="t" />
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input
                  type="text"
                  name="acct"
                  size="20"
                  autocorrect="off"
                  spellcheck="false"
                  autocapitalize="off"
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" size="20" />
              </td>
            </tr>
          </tbody>
          <br />
          <input type="submit" value="create account" />
        </form>
      </div>
    );
  }
}

export default Submit;
