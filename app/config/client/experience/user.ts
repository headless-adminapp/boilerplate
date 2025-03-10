import { useFormInstance } from '@headless-adminapp/app/dataform';
import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { useOnFieldValueChangeListener } from '@headless-adminapp/app/dataform/hooks/useOnFieldValueChangeListener';
import { userSchema } from '../../schema/user';

const builder = new SchemaExperienceBuilder(userSchema);

export const userSchemaExperience = builder.defineExperience({
  forms: [
    {
      id: 'default',
      name: 'Default',
      experience: builder.defineFormExperience({
        headerControls: ['username'],
        includeAttributes: ['fullName'],
        tabs: [
          {
            name: 'general',
            label: 'General',
            controls: ['firstName', 'lastName', 'email'],
          },
        ],
        useHookFn: useUserFormCustomHook,
      }),
    },
  ],
});

// Custom hook injected into the form experience
function useUserFormCustomHook() {
  const form = useFormInstance();

  useOnFieldValueChangeListener('firstName', async (value) => {
    form.setValue('fullName', `${value} ${form.getValues('lastName') ?? ''}`);
  });

  useOnFieldValueChangeListener('lastName', async (value) => {
    form.setValue('fullName', `${form.getValues('firstName') ?? ''} ${value}`);
  });
}
