// TypeScript Version: 2.3

declare module 'react-collapse' {
    import { Component, ReactChildren } from 'react';
    import { OpaqueConfig } from 'react-motion';

    export interface StringDictionary {
        [key: string]: string | undefined;
    }

    interface onRenderArgs {
        current: number;
        from: number;
        to: number;
    }

    interface onMeasureArgs {
        height: number;
        width: number;
    }

    interface CollapseProps {
        isOpened: boolean;
        springConfig?: OpaqueConfig;
        forceInitialAnimation?: boolean;
        hasNestedCollapse?: boolean;
        fixedHeight?: number;
        theme?: StringDictionary;
        style?: object;
        onRender?(args: onRenderArgs): void;
        onRest?(): void;
        onMeasure?(args: onMeasureArgs): void;
    }

    export class Collapse extends Component<CollapseProps> {
    }

    interface UnmountClosedProps {
        isOpened: boolean;
        onRest?(): void;
    }

    export class UnmountClosed extends Component<UnmountClosedProps> {
    }
}