import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './BinarySearchTree.module.css';

const BinarySearchTree = () =>{
  const [root,setRoot] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const tree = [];

return(
  <div className={styles.BinarySearchTree} data-testid="BinarySearchTree">
    BinarySearchTree Component
  </div>
)};

BinarySearchTree.propTypes = {};

BinarySearchTree.defaultProps = {};

export default BinarySearchTree;
