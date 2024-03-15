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
    const [loading, setLoading] = useState<boolean>(false);

    let timer: ReturnType<typeof setTimeout>;

    async function fetchAge(){

        let name = '';

        clearTimeout(timer);

        if(nameInputRef.current)
            name = nameInputRef.current.value;

        timer=setTimeout(async ()=>{

            if(loading)
                return;

            setLoading(true);

            const response = await NameAgeService.getAgeByName(name);

            setNameAge(response);

            setLoading(false);

    }, 3000);

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
                    <Text>{nameAge.age? `Your Age: ${nameAge.age}`:''}</Text>
                </Panel>
            </View>
            </div>
    );
};

export default UserForm;