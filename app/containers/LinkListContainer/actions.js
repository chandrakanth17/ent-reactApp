/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_FAILED,
  REQUEST_LINK_SUCCEEDED,
  REQUEST_LINKS,
} from "./constants";

export function requestLinkSucceeded(links) {
  return { type: REQUEST_LINK_SUCCEEDED, links };
}

export function requestLinkFailed(message) {
  return {
    type: REQUEST_LINK_FAILED,
    message,
  };
}

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}
