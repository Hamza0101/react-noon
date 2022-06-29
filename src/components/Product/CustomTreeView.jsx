import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import data from "../Product/data/filter.json";

export default function CustomTreeView(props) {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {data.Category.length > 0 ? (
        <>
          {data.Category.map((category, index) => {
            return (
              <>
                <TreeItem nodeId={category.id} label={category.sname}>
                  {category.subCategories.length > 0 ? (
                    <>
                      {category.subCategories.map((subc, index) => {
                        return (
                          <>
                            {console.log("i am subc.id", subc.id)}
                            <TreeItem
                              nodeId={subc}
                              label={subc.cname}
                              onClick={() => props.handleCategory(subc.cname)}
                            />
                          </>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <h1></h1>
                    </>
                  )}
                </TreeItem>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h1></h1>
        </>
      )}
    </TreeView>
  );
}
