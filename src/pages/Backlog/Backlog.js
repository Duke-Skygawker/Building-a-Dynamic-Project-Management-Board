import styled from "styled-components";
import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching";

// backlog can still be made dynamic with drag'n'drop

const BacklogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;

  h2 {
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
  }
`;

const TasksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5%;
`;

function Backlog() {
  const [loading, error, tasks] = useDataFetching(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );

  return (
    <BacklogWrapper>
      <h2>Backlog</h2>
      <TasksWrapper>
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} title={task.title} body={task.body} />
          ))
        )}
      </TasksWrapper>
    </BacklogWrapper>
  );
}

export default Backlog;
