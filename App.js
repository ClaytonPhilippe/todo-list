import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = { id: Date.now().toString(), text: task };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <BouncyCheckbox
              textStyle={styles.checkboxText}
              style={styles.checkbox}
              text={item.text}
              size={25}
              fillColor="#5F80AF"
              innerIconStyle={{ borderWidth: 2 }}
            />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeTask(item.id)}>
              <Text style={styles.removeButtonIcon}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TextInput
        maxLength={10}
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Adicionar item"
        placeholderTextColor="#5c6675"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#213555',
    padding: '5%',
  },
  title: {
    color: '#5F80AF',
    fontSize: 20,
  },
  input: {
    width: '100%',
    height: 60,
    top: 40,
    backgroundColor: '#17253B',
    borderColor: '#213555',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
  addButton: {
    backgroundColor: '#4F709C',
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 12,
    left: 131,
  },
  iconButton: {
    color: '#17253B',
    fontSize: 22,
  },
  removeButton: {
    position: 'absolute',
    color: '#97010E',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A3B3B',
    borderRadius: 10,
    left: '90%',
  },
  removeButtonIcon: {
    color: '#4d5d76',
    marginLeft: 10,
    fontSize: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    width: 320,
    height: 55,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#4d5d76',
    borderRadius: 10,
    paddingLeft: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: 'white',
  },
});
