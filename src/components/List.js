import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({ todoData, setTodoData }) {

  // const btnStyle = {
  //   color: '#fff',
  //   border: 'none',
  //   padding: '5px, 9px',
  //   borderRadius: '50%',
  //   cursor: 'pointer',
  //   float: 'right'
  // };
  // const listStyle = (completed) => {
  //   return {
  //     padding: "5px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none"
  //   }
  // }

  const handleCompleChange = (id) => {

    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  }


  //삭제하기
  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id)
    setTodoData(newTodoData);
  }

  //드래그하면 위치변동하게 만들기
  const handleEnd = (result) => {
    //매개변수는 source항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함됩니다.
    console.log('result', result);

    if (!result.destination) return;
    const newTodoData = todoData;

    //1.변경시키는 아이템을 배열에서 지웁니다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    //원하는 자리에 redorderedItem을 Insert 해줍니다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {/* 클릭해서 드래그시 진한 회색으로 */}
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                        } flex items-center justify-between w-full px-4 py-1 my-2text-gray-600 bg-gray-100 border rounded`}
                    >

                      <div className='items-center'>
                        <input
                          onChange={() => handleCompleChange(data.id)}
                          type="checkbox"
                          defaultChecked={data.completed}
                        />{" "}
                        <span className={data.completed ? "line-through" : undefined}>
                          {data.title}
                        </span>
                      </div>
                      <div className='items-center'>
                        <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>x</button>
                      </div>
                    </div>

                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
