import React, { CSSProperties } from 'react';
import styles from './index.module.scss';

interface CardProps {
  style?: CSSProperties;
  /**
   * 头部
   */
  title: React.ReactNode;
  /**
   * 头部样式
   */
  titleStyle?: CSSProperties;
  /**
   * body
   */
  body?: React.ReactNode;
  /**
   * body 样式
   */
  bodyStyle?: CSSProperties;
  /**
   * footer
   */
  footer?: React.ReactNode;
  /**
   * footer 样式
   */
  footerStyle?: CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({ title, body, titleStyle, footer, bodyStyle, footerStyle, style }: CardProps) => {
  return (
    <div style={{ ...style }} className={styles.card}>
      {title && (
        <div style={{ ...titleStyle }} className={styles.title}>
          {title}
        </div>
      )}
      {body && (
        <div style={{ ...bodyStyle }} className={styles.body}>
          {body}
        </div>
      )}
      {footer && (
        <div style={{ ...footerStyle }} className={styles.footer}>
          {footer}
        </div>
      )}
    </div>
  );
};
