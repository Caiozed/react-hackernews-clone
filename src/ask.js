import React, { Component } from "react";
import { Link } from "react-router-dom";

class Ask extends Component {
  render() {
    return (
      <div>
        <table>
          <tr class="athing" id="17350700">
            <td align="right" valign="top" class="title">
              <span class="rank">1.</span>
            </td>{" "}
            <td valign="top" class="votelinks">
              <center>
                <a
                  id="up_17350700"
                  href="vote?id=17350700&amp;how=up&amp;goto=ask"
                >
                  <div class="votearrow" title="upvote" />
                </a>
              </center>
            </td>
            <td class="title">
              <a href="item?id=17350700" class="storylink">
                Ask HN: Where do you read C++ documentation?
              </a>
            </td>
          </tr>{" "}
          <tr>
            <td colspan="2" />
            <td class="subtext">
              <span class="score" id="score_17350700">
                2 points
              </span>{" "}
              by{" "}
              <a href="user?id=ddtaylor" class="hnuser">
                ddtaylor
              </a>{" "}
              <span class="age">
                <a href="item?id=17350700">1 hour ago</a>
              </span>{" "}
              <span id="unv_17350700" /> |{" "}
              <a href="item?id=17350700">1&nbsp;comment</a>{" "}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Ask;
