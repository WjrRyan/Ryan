import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const characters = [
  { id: 1, name: '哈利·波特', avatar: '🧙‍♂️', description: '霍格沃茨的魔法师' },
  { id: 2, name: '福尔摩斯', avatar: '🕵️', description: '世界著名侦探' },
  { id: 3, name: '钢铁侠', avatar: '🦾', description: '天才发明家托尼·斯塔克' },
  { id: 4, name: '白雪公主', avatar: '👸', description: '童话故事中的公主' },
]

export default function CharacterSelect({ onSelect }: { onSelect: (character: typeof characters[0]) => void }) {
  const [selected, setSelected] = useState(characters[0])

  const handleSelect = (character: typeof characters[0]) => {
    setSelected(character)
    onSelect(character)
  }

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="flex items-center">
              <span className="text-2xl mr-2">{selected.avatar}</span>
              <span className="block truncate">{selected.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {characters.map((character) => (
                <Listbox.Option
                  key={character.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                    }`
                  }
                  value={character}
                >
                  {({ selected }) => (
                    <>
                      <span className="flex items-center">
                        <span className="text-2xl mr-2">{character.avatar}</span>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {character.name}
                        </span>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
} 