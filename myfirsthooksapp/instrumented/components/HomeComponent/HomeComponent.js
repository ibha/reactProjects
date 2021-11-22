import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeComponent.module.css';

const HomeComponent = () => (
  <div className={styles.HomeComponent} data-testid="HomeComponent">
    HomeComponent Component
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
