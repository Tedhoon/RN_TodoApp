import React ,{Component} from 'react';
import { StyleSheet, View , FlatList } from 'react-native';
import Header from './src/components/Header';
import Subtitle from './src/components/Subtitle';
import InputBox from './src/components/InputBox';
import TodoItem from './src/components/TodoItem';

export default class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
    
      inPutValue : "",

      todos : [
        {
          title : 'anything'
        },
        {
          title : 'second'
        },
      ],
    
    }
  }

  _makeTodoItem = ({item,index}) => {
    return(
    <TodoItem text = {item.title} />
    )
  }
  _changeText = (value) => {
    return(
    this.setState({inPutValue : value})
    )
  }
  _addTodoItem = () => {
    if(this.state.inPutValue !== '') {
      const prevTodo = this.state.todos;
      const newTodo = { title : this.state.inPutValue };
      
      this.setState({
        inPutValue : '',
        todos : prevTodo.concat(newTodo)
      });
    }
  }

  render () {
  //비구조 할당
    const { todos } = this.state
    const { inPutValue } = this.state
    const { _makeTodoItem } = this
    const { _addTodoItem } = this
    const { _changeText } = this
    
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Header/>
        </View>
        <View style={styles.subcontainer}>
          <Subtitle title="할 일 입력"/>
          <InputBox
            value={inPutValue}
            changeText={_changeText}
            addTodo={_addTodoItem}
          />
        </View>
  
        <View style={styles.subcontainer}>
          <Subtitle title="해야 할 일 리스트"/>
          {/* <TodoItem text="asd" /> */}
          <FlatList 
            data = {todos}
            renderItem = {_makeTodoItem}
            keyExtractor = {(item,index) => {return `$(index)`}}
          />
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면을 구성하는 크기를 몇 퍼센트로 맞출것인가
    marginTop : 50,
  },
  text: {
    alignItems: 'center',
  },
  subcontainer: {
    marginLeft: 20,
  }
});