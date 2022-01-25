/// <reference types="react" />
import 'antd/dist/antd.css';
export interface DFormManagerProps {
    size?: 'small' | 'medium' | 'large';
}
/**
 * Primary UI component for user interaction
 */
export declare const DFormManager: ({ size, ...props }: DFormManagerProps) => JSX.Element;
