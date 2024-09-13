import { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        childName: '',
        childBirthday: '',
        childGender: '',
        referenceProfessional: '',
        recevieNotification: 'false'
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prevData => ({ ...prevData, [event.target.name]: event.target.value}))
    };

    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <lable>
                    Nome:
                    <input
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                    />
                </lable>
                <lable>
                    Sobrenome:
                    <input
                        type="text"
                        value={formData.lastName}
                        name="lastName"
                        onChange={handleChange}
                    />
                </lable>
                <p>Informações sobre seu filho(a)</p>
                <lable>
                    Nome:
                    <input
                        type="text"
                        value={formData.childName}
                        name="childName"
                        onChange={handleChange}
                    />
                </lable>
                <lable>
                    Data de aniversário:
                    <input
                        type="text"
                        value={formData.childBirthday}
                        name="childBirthday"
                        onChange={handleChange}
                    />
                </lable>
                <lable>
                    Genero:
                    <input
                        type="text"
                        value={formData.childGender}
                        name="childGender"
                        onChange={handleChange}
                    />
                </lable>
                <button>Adicionar</button>
                <button>Adicionar mais um filho</button>
            </form>
        </>
    );
}

export default RegistrationForm;
