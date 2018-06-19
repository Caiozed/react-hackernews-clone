import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jobs extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr style={{ height: "20px" }} />
            <tr>
              <td />
              <td>
                <img src="s.gif" height="1" width="14" />
              </td>
              <td>
                These are jobs at YC startups. You can apply to many at once
                through
                <a href="https://www.workatastartup.com">
                  <u>Work at a Startup</u>
                </a>{" "}
                or
                <a href="https://triplebyte.com/?ref=yc_jobs">
                  <u>Triplebyte</u>
                </a>, and browse company profiles at
                <a href="https://www.keyvalues.com/yc-funded-companies">
                  <u>Key Values</u>
                </a>{" "}
                (YC W18).
              </td>
            </tr>
            <tr style={{ height: "20px" }} />

            <tr class="athing" id="17343251">
              <td align="right" valign="top" class="title">
                <span class="rank" />
              </td>{" "}
              <td />
              <td class="title">
                <a
                  href="https://www.scaleapi.com/about#jobs"
                  class="storylink"
                  rel="nofollow"
                >
                  Scale API is hiring engineers to build human perception as a
                  service
                </a>
                <span class="sitebit comhead">
                  {" "}
                  (<a href="from?site=scaleapi.com">
                    <span class="sitestr">scaleapi.com</span>
                  </a>)
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="2" />
              <td class="subtext">
                <span class="age">
                  <a href="item?id=17343251">21 hours ago</a>
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Jobs;
