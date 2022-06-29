import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

export default function CustomTreeView(props) {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="5" label="Electronics & Mobiles">
        <TreeItem nodeId="10" label="All Electronics" />
        <TreeItem nodeId="6" label="Mobile Accessories">
          <TreeItem nodeId="12" label="All Mobiles & Accessories" />
          <TreeItem nodeId="8" label="Mobile Phones">
            <TreeItem nodeId="1" label="All Mobile phones" />
            <TreeItem nodeId="2" label="Smart Phones" />
            <TreeItem nodeId="3" label="Feature Phones" />
            <TreeItem />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
