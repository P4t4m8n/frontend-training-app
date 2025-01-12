/**
 * @file Defines general types used in the application.
 */

import { ReactNode } from "react";

/**
 * Represents an entity with an optional ID.
 * @typedef {Object} TEntity
 * @property {string} [id] - The optional ID of the entity.
 */
export type TEntity = {
  id?: string;
};

/**
 * Represents a navigation link.
 * @typedef {Object} TNavLink
 * @property {string} to - The destination path of the link.
 * @property {JSX.Element} [icon] - An optional icon to display with the link.
 * @property {string} [text] - Optional text to display for the link.
 * @property {string} [style] - Optional style class for the link.
 */
export type TNavLink = {
  to: string;
  icon?: JSX.Element;
  text?: string;
  style?: string;
};

/**
 * Represents a route configuration.
 * @typedef {Object} RouteConfig
 * @property {string} path - The path of the route.
 * @property {ReactNode} element - The React element to render for the route.
 * @property {RouteConfig[]} [children] - Optional child routes.
 */
export type RouteConfig = {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
};
