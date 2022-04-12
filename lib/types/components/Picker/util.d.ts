export declare const PLUGINS_URL: {
    D3: string[];
    CarTrack: string[];
    HeatmapOverlay: string[];
    BufferTool: string[];
    ImageOverLayer: string[];
};
export interface LoadConfig {
    v?: string;
    tk?: string;
    plugins?: (keyof typeof PLUGINS_URL)[];
}
interface LoadTMapApiReturn {
    T: any;
    script: any;
}
export declare function loadTMapApi(cfg: LoadConfig): Promise<LoadTMapApiReturn | undefined>;
export declare function getCityNameByIP(): Promise<any>;
export {};
