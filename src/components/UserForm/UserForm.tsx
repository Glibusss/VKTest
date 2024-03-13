import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Panel,
    Button,
    Text,
    Input,
    FormItem
  } from '@vkontakte/vkui';
  import '@vkontakte/vkui/dist/vkui.css';
  import { NameAgeService } from '../../API/NameAge/NameAgeService';
  import { NameAge } from '../../types/NameAge';
  import './UserForm.css';

export const UserForm = () => {

    const [nameAge, setNameAge] = useState<NameAge>({name:'',count:0,age:0});
    const nameInputRef = useRef<HTMLInputElement>(null);

    let timer: ReturnType<typeof setTimeout>;

    async function fetchAge(){
        let name = '';
        clearTimeout(timer);
        if(nameInputRef.current)
            name = nameInputRef.current.value;
        timer=setTimeout(async ()=>{
            const response = await NameAgeService.getAgeByName(name);
        setNameAge(response);
    }, 3000)
    }

    return (
        <div className='user-form-container'>
            <View activePanel="panel">
                <Panel id="panel">
                    <Text>Enter your name and get your age:</Text>
                    <FormItem>
                        <Input type={'text'} getRef={nameInputRef} onInput={fetchAge} placeholder='Enter your name' />
                    </FormItem>
                    <FormItem>
                        <Button onClick={fetchAge}>Get Age</Button>
                    </FormItem>
                    <Text>Your Age: {nameAge.age? nameAge.age:'unknown'}</Text>
                </Panel>
            </View>
            </div>
    );
};

export default UserForm;