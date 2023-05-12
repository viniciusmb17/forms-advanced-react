import { useForm } from 'react-hook-form'
import './styles/global.css'

export function App() {
  const { register } = useForm()

  return (
    <main className="h-screen bg-zinc-950 text-zinc-300 flex items-center justify-center">
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <input
            className="border border-zinc-200 shadow-sm rounded h-10 px-3"
            type="email"
            {...register('email')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Senha</label>
          <input
            className="border border-zinc-200 shadow-sm rounded h-10"
            type="password"
            {...register('password')}
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 rounded font-semibold text-white h-10"
        >
          Salvar
        </button>
      </form>
    </main>
  )
}
