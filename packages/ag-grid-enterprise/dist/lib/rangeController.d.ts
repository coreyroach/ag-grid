// ag-grid-enterprise v20.2.0
import { AddRangeSelectionParams, GridCell, GridPanel, IRangeController, RangeSelection } from "ag-grid-community";
export declare class RangeController implements IRangeController {
    private loggerFactory;
    private rowModel;
    private eventService;
    private columnController;
    private rowRenderer;
    private focusedCellController;
    private mouseEventService;
    private gridOptionsWrapper;
    private columnApi;
    private gridApi;
    private cellNavigationService;
    private logger;
    private gridPanel;
    private cellRanges;
    private activeRange;
    private lastMouseEvent;
    private bodyScrollListener;
    private dragging;
    private startedFrom;
    private autoScrollService;
    registerGridComp(gridPanel: GridPanel): void;
    private init;
    setRangeToCell(cell: GridCell, appendRange?: boolean): void;
    extendRangeToCell(toCell: GridCell): void;
    extendRangeInDirection(startCell: GridCell, key: number): boolean;
    setRange(rangeSelection: AddRangeSelectionParams): void;
    addRange(rangeSelection: AddRangeSelectionParams): void;
    getCellRanges(): RangeSelection[] | null;
    isEmpty(): boolean;
    isMoreThanOneCell(): boolean;
    clearSelection(): void;
    private onBodyScroll;
    isCellInAnyRange(cell: GridCell): boolean;
    private isCellInSpecificRange;
    getCellRangeCount(cell: GridCell): number;
    private isRowInRange;
    onDragStart(mouseEvent: MouseEvent): void;
    private createNewActiveRange;
    private selectionChanged;
    private dispatchChangedEvent;
    onDragStop(): void;
    onDragging(mouseEvent: MouseEvent | null): void;
    private updateSelectedColumns;
}
