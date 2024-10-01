"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateUser } from '../hooks/useCreateUser';
import { useUpdateUser } from '../hooks/useUpdateUser';
import { useRouter } from 'next/navigation';

const schema = z.object({
  nome: z.string().min(1, 'Escreva seu nome'),
  cpf: z.string()
    .regex(/^\d+$/, 'CPF deve conter apenas números') 
    .length(11, 'CPF deve conter 11 números'), 
  email: z.string().email('Email inválido'),
  telefone: z.string()
    .regex(/^\d+$/, 'Telefone deve conter apenas números') 
    .min(10, 'Telefone deve ao menos conter 10 números'), 
  endereco: z.string().optional(),
});

interface UserFormProps {
  existingUser?: {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco?: string;
  };
}

const UserForm: React.FC<UserFormProps> = ({ existingUser }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: existingUser || {},
  });
  const { mutate: createUser } = useCreateUser();
  const { mutate: updateUser } = useUpdateUser();
  const router = useRouter();

  const onSubmit = async (data) => {
    if (existingUser) {
      await updateUser({ id: existingUser.id, ...data });
    } else {
      await createUser(data);
    }
    reset();
    router.push('/users');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-l mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input {...register('nome')} placeholder="Nome" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" required />
        <span className="text-red-500">{errors.nome?.message}</span>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          {...register('cpf')}
          placeholder="CPF"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
          inputMode="numeric" 
          required
        />
        <span className="text-red-500">{errors.cpf?.message}</span>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input {...register('endereco')} placeholder="Endereço (Opcional)" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" />
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input {...register('email')} placeholder="Email" className="block py-2.5 px-0 w-full text-sm bg-zinc-950 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-yellow-500 focus:outline-none focus:ring-0 peer" required />
          <span className="text-red-500">{errors.email?.message}</span>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register('telefone')}
            placeholder="Telefone"
            className="block py-2.5 px-0 w-full text-sm bg-zinc-950 border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-yellow-500 focus:outline-none focus:ring-0 peer"
            inputMode="numeric"
            required
          />
          <span className="text-red-500">{errors.telefone?.message}</span>
        </div>
      </div>

      <div className="grid place-content-center py-4">
        <button
          type="submit"
          className={`text-white ${
            existingUser ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
          } font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
        >
          {existingUser ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
