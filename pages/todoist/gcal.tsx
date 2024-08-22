import { Filter, FILTER_TYPE, Label, Project, Section } from '../../interfaces/todoist';
import { ChangeEventHandler, useEffect, useState } from 'react';
import FormData from 'form-data';

const filterTypes = Object.values(FILTER_TYPE);
const labels: Label[] = [{ name: 'label 1', id: 1 }, { name: 'label 2', id: 2 }];
const projects: Project[] = [{ name: 'project 1', id: 1 }, { name: 'project 2', id: 2 }];
const sections: Section[] = [{ name: 'section 1', id: 1 }, { name: 'section 2', id: 2 }];

const filters: Record<FILTER_TYPE, Filter[]> = {
  project: projects,
  section: sections, // todo add project name in ()
  label: labels,
};

const addedFiltersDef = [
  { type: 'section', name: 'Events' },
  { type: 'label', name: 'wandern' },
];

export default function Page() {
  const [selectedType, setSelectedType] = useState<FILTER_TYPE>(filterTypes[0]);
  const [userName, setUserName] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [addedFilters, setAddedFilters] = useState(addedFiltersDef);

  // todo redirect todoist auth and if 404
  // todo using endpoints
  useEffect(() => {
    // if localstorage auth keys
    setIsAuthenticated(true);
  }, []);

  return (
    <div>
      <p>user name</p>
      {isAuthenticated && (
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            formData.entries().forEach(x => console.log(x));
            // todo add response to addedFilters

          }}>
          <Select label={'Filter Type'} name={'type'}
                  options={filterTypes.map(filterType => ({ name: filterType, value: filterType }))}
                  onChange={(e) => setSelectedType(e.target.value)}/>
          <Select label={selectedType} name={'filter'}
                  options={filters[selectedType].map(filter => ({ name: filter.name, value: filter.id }))}/>
          <button type={'submit'}>Add</button>
        </form>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>{addedFilters.map(filter => {
        return (
          <>
            <p>{filter.type}</p>
            <p>{filter.name}</p>
            <button style={{ alignSelf: 'center', justifySelf: 'start' }}>Remove</button>
          </>
        );
      })}</div>
      {isAuthenticated ? <button>Log Out</button> : <button>GCAL Auth</button>}
    </div>
  );
}

interface Option {
  name: string,
  value: string | number,
}

interface SelectProps {
  label?: string,
  name: string,
  options: Option[],
  onChange?: ChangeEventHandler<HTMLSelectElement>,
}

function Select({ label, options, name, onChange }: SelectProps) {
  return (
    <div>
      <label style={{ display: 'block', textTransform: 'capitalize' }} htmlFor={name}>{label ?? name}</label>
      <select name={name} onChange={onChange && onChange}>
        {options.map(option => <option value={option.value}>{option.name}</option>)}
      </select>
    </div>
  );
}