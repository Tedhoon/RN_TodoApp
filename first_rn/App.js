import React ,{Component} from 'react';
import { StyleSheet, View , FlatList ,AsyncStorage } from 'react-native';
import Header from './src/components/Header';
import Subtitle from './src/components/Subtitle';
import InputBox from './src/components/InputBox';
import TodoItem from './src/components/TodoItem';
// import { AsyncResource } from 'async_hooks';

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

  componentWillMount() {
    this._getData();    
  }

  _storeData = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state)); //키 밸류형식으로 저장 키네임, json밸류
  }

  _getData = () => {
    AsyncStorage.getItem('@todo:state').then((state) => {
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
    })
  }

  _makeTodoItem = ({item,index}) => {
    return(
    <TodoItem 
      text = {item.title}
      isComplete = {item.isComplete} //props명과 state명을 일치 //클릭되었는지 현재 상태만 나타내줌
      changeComplete = {() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete; //클릭한 대상의 index를 가져와서 반대로 뒤집어줌
        this.setState({todos:newTodo}, this._storeData)
      }}
      deleteItem = {() => {
        const newTodo = [ ...this.state.todos];
        newTodo.splice(index, 1); //배열에서 하나를 삭제 splice(시작지점, 몇개없을껀지))
        this.setState({todos:newTodo}, this._storeData)
      }}
    />
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
      const newTodo = { title : this.state.inPutValue , isComplete : false };
      
      this.setState({
        inPutValue : '',
        todos : prevTodo.concat(newTodo) //concat을 이용해 배열을 안으로 넣어줌
      }, this._storeData);
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