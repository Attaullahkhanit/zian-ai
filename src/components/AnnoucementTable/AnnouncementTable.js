import React, { useState } from "react";
import "./styles.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { ReactComponent as AstronateFirst } from "../../Assets/Astronaut1.svg";
import { ReactComponent as AstronateSecond } from "../../Assets/Astronaut2.svg";
import { dataArray } from "../../utils";
import Pagination from "react-js-pagination";

function AnnouncementTable() {
  const iconSize = 18;
  const itemsPerPage = 5; // You can adjust this value based on your preference
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataArray.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="table">
        <div className="simple-table-container">
          <table className="simple-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Content</th>
                <th>Status</th>
                <th>Username</th>
                <th>Created Date</th>
                <th>Action</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.photo}</td>
                  <td>{data.content}</td>
                  <td>{data.status}</td>
                  <td>{data.username}</td>
                  <td>{data.createdDate}</td>
                  <td>
                    <button className="action-button">
                      <RemoveRedEyeIcon style={{ fontSize: iconSize }} />
                    </button>
                    <button className="action-button">
                      <BorderColorIcon style={{ fontSize: iconSize }} />
                    </button>
                    <button className="action-button">
                      <RestoreFromTrashIcon style={{ fontSize: iconSize }} />
                    </button>
                  </td>
                  <td>
                    <button className="register-button">{data.value}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">
          <div className="pagination-right">
            <div className="paginationcls">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={dataArray.length}
                pageRangeDisplayed={4}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnnouncementTable;
