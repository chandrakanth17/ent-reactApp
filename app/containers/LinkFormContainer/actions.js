/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK,
  ADD_LINK_FAILED,
  ADD_LINK_SUCCESS,
  ADD_LINK_CANCEL,
} from "./constants";

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}

export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_SUCCESS,
    link,
  };
}

export function addLinkError(link, message) {
  return {
    type: ADD_LINK_FAILED,
    link,
    message,
  };
}

export function addLinkCancel() {
  return {
    type: ADD_LINK_CANCEL,
  };
}
